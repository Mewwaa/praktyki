from cgitb import text
import imp
import slack
import os
import random
from pathlib import Path
from dotenv import load_dotenv
from faker import Faker


env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

client = slack.WebClient(token=os.environ['SLACK_TOKEN'])


task = ["Change_language", "Select_language", "zoom", "center_map", "user_localization", "destination", "search_localization"]
status = ["Successed", "Failed"]
progress = ["https://www.peugeot.pl/", "https://www.bmw.com/en/index.html", "https://www.audi.com/en.html", "https://www.volkswagen.pl/pl.html" , "https://www.google.pl/maps/preview"]



faker = Faker()
for i in range(100):
    choice = random.randint(0,1)
    choice2 = random.randint(0,6)
    choice3 = random.randint(0,4)
    randname = status[choice]
    randname1 = task[choice2]
    randname2 = progress[choice3] 
    client.chat_postMessage(channel='#test',text=f'name: {faker.name()} date: {faker.date()} task: {randname1} check_progress: {randname2} status: {randname}')
    client.chat_postMessage(channel='#bmw',text=f'name: {faker.name()} date: {faker.date()} task: {randname1} check_progress: {randname2} status: {randname}')
    client.chat_postMessage(channel='#hcp3',text=f'name: {faker.name()} date: {faker.date()} task: {randname1} check_progress: {randname2} status: {randname}')
    client.chat_postMessage(channel='#saic',text=f'name: {faker.name()} date: {faker.date()} task: {randname1} check_progress: {randname2} status: {randname}')
    client.chat_postMessage(channel='#peugeot',text=f'name: {faker.name()} date: {faker.date()} task: {randname1} check_progress: {randname2} status: {randname}')

