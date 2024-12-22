cd "$(dirname "$0")" || exit

echo "Installing Requirements..."
pip install -r requirement.txt

echo "Starting Server..."
gunicorn src.app:app
