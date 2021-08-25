import Templates.utils as utils
from openpyxl import Workbook, load_workbook

class Rows:
    def get_total_rows(self, file: str) -> int:
        '''Gets total number of rows in the sheet

        :param file: Path of the file
        :type file: str
        :return: Number of rows in the sheet
        :rtype: int
        '''
        return utils.Utils().init_worksheet(file).max_row