import os
import json
import argparse

def is_text_file(file_path):
    """Check if a file is a text file by attempting to read a small portion."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            f.read(1024)  # Read a small portion to check if it's a text file
        return True
    except:
        return False  # If reading fails, assume it's not a text file

def scan_directory(directory):
    """Scans a directory, reading text files and logging errors separately."""
    project_data = {}
    error_log = {}

    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)

            # Skip non-text files
            if not is_text_file(file_path):
                continue  

            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    project_data[file_path] = f.read()
            except Exception as e:
                error_log[file_path] = str(e)

    return project_data, error_log

# Parse command-line arguments
parser = argparse.ArgumentParser(description="Scan a directory and save file contents to JSON.")
parser.add_argument("directory", nargs="?", default=os.getcwd(), help="Directory to scan (default: current directory)")
args = parser.parse_args()

# Run the scan
project_dir = args.directory
data, errors = scan_directory(project_dir)

# Save scanned files to JSON
output_file = "project_files.json"
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)

# Save error log separately
error_file = "error_log.json"
with open(error_file, "w", encoding="utf-8") as f:
    json.dump(errors, f, indent=4)

print(f"✅ Project scan complete!")
print(f"📂 Scanned files saved to: {output_file}")
print(f"⚠️ Errors logged in: {error_file}" if errors else "✅ No errors encountered!")
