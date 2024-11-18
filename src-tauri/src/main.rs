#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod commands;
use commands::{ollama_processor::ollama_processor, video_processor::video_processor};

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![ollama_processor, video_processor])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
