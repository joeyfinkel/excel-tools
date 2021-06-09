import itertools

class Base:
    def get_column(self, sheet, column, row) -> list:
        col = []

        for i in sheet.iter_rows(min_row = row, values_only = True):
            col.append(i[column])

        return col

    def set_attributes(self, lst) -> list:
        '''
        returns a list of dictionaries with attribute and corresponding data
        '''
        results = []
        values = {}

        for key, value in zip(lst[0::2], lst[1::2]):
            values = dict(zip([key], [value]))
            results.append(values)

        return results

    def insert_every_n(self, l1, l2, k):
        i1, i2 = iter(l1), iter(l2)
        while True:
            try:
                yield from itertools.islice(i1, k)
                yield next(i2)
            except StopIteration:
                return

    def create_heading_list(self, lst, amount) -> list:
        return [lst] * amount

    def convert(self, lst):
        '''
        converts list to dict
        :param lst: list to convert to dict
        :return dict
        '''
        return {lst[i]: lst[i + 1] for i in range(0, len(lst), 2)}

    # inserting data to spreadsheet
    def populate_header(self, sheet, data):
        headings = ['ID'] + list(data)
        sheet.append(headings)

    def populate_col(self, sheet, data):
        for d in data:
            info = list(data[d].values())
            sheet.append([d] + info)

    def insert_row(self, wb, sheet, header, row, wb_name):
        self.populate_header(sheet, header)
        self.populate_col(sheet, row)
        wb.save('{}.xlsx' .format(wb_name))