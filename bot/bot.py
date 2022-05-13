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
status = ["Succeded", "Failed"]
progress = ["http://dev-angrybirds.nds.tt3.com:8000/job/A-IVI_ANZ_2021.09.001_AO-ArtificalOpsTest1-NAV-66d645_2.4.6_cfgCheck_2007-6200/", "http://dev-angrybirds.nds.tt3.com:8000/job/A-IVI_ANZ_2021.09.001_AO-ArtificalOpsTest1-NAV-66d645_2.4.6_webbval_2007-6200/", "http://dev-angrybirds.nds.tt3.com:8000/job/A-IVI_ANZ_2021.09.001_AO-ArtificalOpsTest1-NAV-e08b4a_2.4.6_sourcecomp_2007-6201/", "http://dev-angrybirds.nds.tt3.com:8000/job/NDS_A-IVI_2021.09.001_2.4.6_Map_a9b5492d3622409c877c11a5528dfc58/" , "http://dev-angrybirds.nds.tt3.com:8000/job/NDS_Server_2022.03.001_2.4.6_Map_2022_03_08aebc1be3864dc4b80e32e8cab396ea/"]

faker = Faker()
for i in range(1):
    choice = random.randint(0,1)
    choice2 = random.randint(0,6)
    choice3 = random.randint(0,4)
    randname = status[choice]
    randname1 = task[choice2]
    randname2 = progress[choice3]
    client.chat_postMessage(channel='#test',text=f'{faker.name()} / {faker.date()} / {randname1} / {randname2} / {randname}')
    client.chat_postMessage(channel='#bmw',text=f'{faker.name()} / {faker.date()} / {randname1} / {randname2} / {randname}')
    client.chat_postMessage(channel='#hcp3',text=f'{faker.name()} / {faker.date()} / {randname1} / {randname2} / {randname}')
    client.chat_postMessage(channel='#saic',text=f'{faker.name()} / {faker.date()} / {randname1} / {randname2} / {randname}')
    client.chat_postMessage(channel='#peugeot',text=f'{faker.name()} / {faker.date()} / {randname1} / {randname2} / {randname}')