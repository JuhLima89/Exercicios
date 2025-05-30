FROM python:3.9-slim
RUN useradd -m appuser
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY .. .
EXPOSE 5000
USER appuser
CMD ["python", "app.py"]
