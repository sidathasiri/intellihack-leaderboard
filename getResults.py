import os
import pandas as pd
from sklearn.metrics import mean_absolute_error
import json

files = os.listdir('./Submissions')
output = []
actual_data = pd.read_csv("Test_Set_Labels.csv")
for file in files:
   file_name = "Submissions/" + file
   data = pd.read_csv(file_name)
   error = mean_absolute_error(actual_data["total_cases"], data["total_cases"])
   temp = {}
   temp['name'] = file.split(".")[0]
   temp['value'] = error
   output.append(temp);
data = pd.DataFrame(output)
data = data.sort_values('value')
data.to_json("./src/data.json", orient='records')