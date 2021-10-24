import eel
import tkinter
import itertools
import tkinter.filedialog as filedialog
import Templates.item_template as item_template
import Templates.utils as utils
import Templates.ItemTemplate.columns as columns
import Templates.ItemTemplate.headers as headers
import Templates.ItemTemplate.rows as rows
from tkinter.filedialog import askopenfilename
from openpyxl import Workbook, load_workbook

template = item_template.ItemTemplate()
util = utils.Utils()
column = columns.Columns()
header = headers.Headers()

eel.init("Web")


@eel.expose
def open_file_explorer():
    root = tkinter.Tk()
    root.withdraw()
    root.wm_attributes("-topmost", 1)
    file = filedialog.askopenfile()
    if not file:
        return None
    filename = file.name
    return filename


@eel.expose
def get_file(path):
    return path


@eel.expose
def get_columns(file):
    sheet = util.init_worksheet(file)
    headers = template.headers_from_sheet(sheet)
    return [
        column.get_columns_with_header(sheet, idx) for idx, el in enumerate(headers)
    ]


@eel.expose
def get_columns_by_row(file, data):
    sheet = util.init_worksheet(file)

    return column.get_columns_by_row(sheet, data)


@eel.expose
def get_column_data(file):
    sheet = util.init_worksheet(file)

    return [
        template.get_column(sheet, idx, 2)
        for idx, el in enumerate(template.headers_from_sheet(sheet))
    ]


@eel.expose
def get_total_columns(file):
    return column.get_total_columns(file)


@eel.expose
def get_total_rows(file):
    return rows.Rows().get_total_rows(file)


@eel.expose
def get_headers(file, file_data):
    sheet = util.init_worksheet(file)

    return header.get_headers(sheet, file_data)


@eel.expose
def final_column_list(file, final_headers):
    sheet = util.init_worksheet(file)
    data = column.final_columns(file, sheet, final_headers)

    return util.create_row_to_add(data, final_headers)


@eel.expose
def set_final_headers(original_headers, new_headers):
    return header.compare(original_headers, new_headers)


@eel.expose
def final_data(file, data, original_headers, new_headers):
    final_headers = set_final_headers(original_headers, new_headers)
    empty_string_list = column.insert_empty_string(data, final_headers)

    return column.create_final_data(empty_string_list, final_headers)


@eel.expose
def save_new_sheet(headers, columns, name):
    head = [x for x in headers if x] # deletes the empty string for the list
    wb = Workbook()
    header.populate(wb.active, head)
    column.populate(wb.active, columns)
    wb.save(f"{util.choose_download_location()}/{name}.xlsx")


eel.start("index.html", size=(570, 730))
