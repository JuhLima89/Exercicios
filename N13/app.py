from datetime import datetime
from zoneinfo import ZoneInfo

now = datetime.now(ZoneInfo("America/Sao_Paulo"))
print("Data e hora atual (BR):", now.strftime("%Y-%m-%d %H:%M:%S"))

