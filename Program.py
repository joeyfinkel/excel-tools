import collections
import pprint
from Base import Base
from itertools import takewhile
from ItemTemplate import ItemTemplate
from openpyxl import Workbook, load_workbook

item = ItemTemplate()
new_wb = Workbook()
# original_book = load_workbook('C:/Users/joeyf/Desktop/Work/For Excel Automation/ciataasindata (1).xlsx')
original_book = load_workbook('Grades.xlsx')

sheet = original_book.active
new_sheet = new_wb.active

ref_headers = item.compare_headers(item.ref_headers(), item.headers_from_sheet(sheet))



# get column values
column = []
for idx, el in enumerate(ref_headers):
    column.append(item.get_column(sheet, idx, 2))

UPC = ''
columns_from_sheet = ''
for s in sheet.iter_rows(max_row = 1, values_only = True):
    columns_from_sheet = s

    if 'upcList' in s:
        UPC = columns_from_sheet.index('upcList')


# create list of same headers the length of the column
headers = []
for idx, el in enumerate(ref_headers):
    headers.append(item.create_heading_list(el, len(column[idx])))

# put header in between each value
column_header_list = []
for idx, el in enumerate(ref_headers):
    column_header_list.append(list(item.insert_every_n(headers[idx], column[idx], k = 1)))

# attributes
attributes = []
for idx, el in enumerate(column_header_list):
    attributes.append(item.set_attributes(column_header_list[idx]))

# creating the dict of values
# data = []
# for attribute in attributes:
#     data.append(list(item.insert_every_n(item.get_column(sheet, UPC, 2), attribute, k=1)))

# convert data to dict
# data_dict = [item.convert(data[idx]) for idx, el in enumerate(data)]

upc_col = item.get_column(sheet, UPC, 2)
results = []
final = {}
for idx, el in enumerate(attributes):
    results.append(el[idx])

for upc in upc_col:
    for r in results:
        for k, v in r.items():
            final.setdefault(upc, {}).update({k:v})

# for f in final:
#     print(final[f].keys())
# pprint.pprint(final)
# print(results)
# for f in final:
#     print([f],list(final[f].values()))

# item.populate_header(new_sheet, final[817354028563])
# item.populate_col(new_sheet, final)
# new_wb.save('ItemTemplate.xlsx')
