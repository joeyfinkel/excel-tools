import itertools
import Templates.ItemTemplate.columns as columns
from openpyxl import worksheet

class Headers:
    def get_headers(self, sheet: worksheet, file_data: list) -> list:
        '''Gets headers from specified xlsx file

        :param sheet: Sheet to get headers from
        :type sheet: worksheet
        :param file_data: List of all data from sheet
        :type file_data: list
        :return: List of all the headers from the sheet
        :rtype: list
        '''
        column = list(itertools.chain.from_iterable(file_data))
        result = columns.Columns().column_list_breakdown(sheet, column)

        return result[0]

    def compare(self, original_headers, headers_to_keep):
        headers = []

        for word in original_headers:
            if word in headers_to_keep:
                headers.append(word)
            else:
                headers.append('')

        return headers

    def populate(self, sheet: worksheet, headers: list) -> None:
        '''Populates new sheet with headers from the list of headers

        :param sheet: Sheet to add headers to
        :type sheet: worksheet
        :param headers: List of headers from original sheet
        :type headers: list
        '''
        sheet.append(list(headers))