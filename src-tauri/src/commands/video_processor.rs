pub use super::ollama_processor::ollama_processor;
use std::fs;

#[tauri::command]
pub async fn video_processor(video_path: String) -> Result<String, String> {
    if !fs::metadata(&video_path).is_ok() {
        return Err("File not found".to_string());
    }

    match ollama_processor(&video_path).await {
        Ok(response) => Ok(response),
        Err(e) => Err(format!("Error at the video processor scope: {}", e)),
    }
}
