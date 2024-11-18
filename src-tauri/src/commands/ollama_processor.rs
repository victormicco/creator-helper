use reqwest::Client;
use serde_json::json;

#[tauri::command]
pub async fn ollama_processor(video_path: &str) -> Result<String, String> {
    let client = Client::new();

    let prompt = format!(
        "Analyze the content of this video file and generate a title and description: {}",
        video_path
    );
    println!("Prompt: {}", prompt);
    let response = client
        .post("http://localhost:11434/api/generate")
        .json(&json!({
            "model": "gemma2",
            "prompt": prompt
        }))
        .send()
        .await
        .map_err(|e| format!("Request error: {}", e))?;

    println!("Response: {:?}", response);

    if response.status().is_success() {
        let data: serde_json::Value = response
            .json()
            .await
            .map_err(|e| format!("Parsing error: {}", e))?;
        let title = data["response"]["title"].as_str().unwrap_or("Untitled");
        let description = data["response"]["description"]
            .as_str()
            .unwrap_or("No description");

        Ok(format!("Title: {}\nDescription: {}", title, description))
    } else {
        Err(format!("Request failed with status: {}", response.status()))
    }
}
