import tkinter
from tkinter.filedialog import askopenfilename
from openpyxl import Workbook, load_workbook, worksheet


class Utils:
    def init_worksheet(self, file: str) -> worksheet:
        """Initializes a new worksheet to be used

        Args:
            file (str): The path of the file

        Returns:
            [type]: new sheet
        """
        if file.endswith(":"):
            file = file[:-1]

        wb = load_workbook(filename=file)

        return wb.active

    def create_row_to_add(self, data: list, headers: list) -> list:
        """Creates a new row to add to the new sheet

        Args:
            data (list): List of all column information from the original sheet
            headers (list): List of headers from original sheet

        Returns:
            list: List of lists of rows
        """
        result = []

        for d in data:
            result.append([d[d.index(header)] for header in headers])

        return result

    def delete_column_data(self, lst: list, value) -> None:
        for idx, el in enumerate(lst):
            value1 = lst[idx].index(value)
            value2 = value1 + 1
            del lst[idx][value1:value2]

    def choose_download_location(self) -> str:
        """Allows the user to choose where to download the new file

        Returns:
            [str]: Location the user chose
        """
        root = tkinter.Tk()
        root.withdraw()
        root.wm_attributes("-topmost", 1)

        return tkinter.filedialog.askdirectory()
