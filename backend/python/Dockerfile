FROM python:3.9-slim
WORKDIR /src

#install dependencies

COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt

#Copy the application code

COPY . .

# Expose the application port
EXPOSE 3001

#Run app
CMD [ "gunicorn", "src.app:app", "--bind", "0.0.0.0:3001", "--workers", "3" ]

