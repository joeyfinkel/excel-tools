import collections
import pandas as pd
import pprint
import itertools
from openpyxl import Workbook, load_workbook
from Templates.item_template import ItemTemplate

item = ItemTemplate()
excel = Workbook()
new_wb = Workbook()

excel_sheet = excel.active
new_sheet = new_wb.active

csv_file = r'C:\Users\joeyf\Desktop\Work\For Excel Automation\americanbuyergroupasindata.csv'
new_file = r'C:\Users\joeyf\Desktop\Work\For Excel Automation\ABG ASIN Data.xlsx'

# original_book = item.csv_to_xlsx(csv_file, new_file)
original_book = load_workbook(r'C:\Users\joeyf\Desktop\Test.xlsx')
sheet = original_book.active

ref_headers = item.ref_headers()

column = [item.get_column(sheet, idx, 2) for idx, el in enumerate(item.headers_from_sheet(sheet))]
for idx, el in enumerate(item.headers_from_sheet(sheet)):
    column[idx].insert(0, el)

all_column = list(itertools.chain.from_iterable(column))

result = [all_column[idx::sheet.max_row] for idx, el in enumerate(all_column)]
result = [r for r in result if len(r) == len(result[0])]
print(result)
headers = result[0]
result = [r for r in result if result.index(r) > 0 ]
result = [list(item.insert_every_n(headers, r, 1)) for r in result]

# data = []
# for res in result:
#     data.append([res[res.index(x) +1] for x in ref_headers])

# print(data[0])

# item.populate_header(new_sheet, ref_headers)
# item.populate_col(new_sheet, data)
# new_wb.save(r'C:\Users\joeyf\Desktop\Work\For Excel Automation\ABG Item Template.xlsx')
