import eel
import ntpath
import tkinter
import itertools
import tkinter.filedialog as filedialog
from tkinter.filedialog import askopenfilename
from openpyxl import Workbook, load_workbook
from Templates.item_template import ItemTemplate

template = ItemTemplate()
excel = Workbook()
new_wb = Workbook()

excel_sheet = excel.active
new_sheet = new_wb.active
ref_headers = template.ref_headers()

eel.init('Web')

def open_file_explorer():
    root = tkinter.Tk()
    root.withdraw()
    root.wm_attributes('-topmost', 1)

def init_worksheet(file):
    wb = load_workbook(filename=file)
    return wb.active

@eel.expose
def get_file():
    '''
    is exposed to use in async getFile()
    return: full path of file
    '''
    open_file_explorer()
    file = filedialog.askopenfile()

    return file.name

@eel.expose
def set_file():
    # is exposed to use in async getFile()
    file = get_file()
    column = get_columns(file)
    print(column)

@eel.expose
def get_columns(file):
    sheet = init_worksheet(file)
    column = [template.get_column(sheet, idx, 2) for idx, el in enumerate(template.headers_from_sheet(sheet))]
    [column[idx].insert(0, el) for idx, el in enumerate(template.headers_from_sheet(sheet))]

    return column

@eel.expose
def get_total_columns(file):
    ''' return: amount of columns in sheet '''
    sheet = init_worksheet(file)
    return sheet.max_column

@eel.expose
def get_total_rows(file):
    ''' return: amount of rows in sheet '''
    sheet = init_worksheet(file)
    return sheet.max_row

@eel.expose
def data_to_table(file, data):
    sheet = init_worksheet(file)
    column = list(itertools.chain.from_iterable(data))
    result = [column[idx::sheet.max_row] for idx, el in enumerate(column)]
    result = [r for r in result if len(r) == len(result[0])]

    return result

# def convert_to_csv(file, new_filename='Item Template'):
#     item_template.convert_to_csv(file,f'{new_filename}.xlsx')

eel.start('index.html')

while True:
    eel.sendFileToPython()(set_file)
    eel.sleep(10.0)
    # break
