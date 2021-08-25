import itertools
from openpyxl import worksheet

class Base:
    def get_column(self, sheet, column, row) -> list:
        col = []

        for i in sheet.iter_rows(min_row = row, values_only = True):
            col.append(i[column])

        return col

    def insert_every_n(self, l1, l2, k):
        i1, i2 = iter(l1), iter(l2)
        while True:
            try:
                yield from itertools.islice(i1, k)
                yield next(i2)
            except StopIteration:
                return
