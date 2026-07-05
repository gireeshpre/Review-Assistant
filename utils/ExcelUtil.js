import xlsx from 'xlsx';

export default class ExcelUtil {

    // Read complete sheet
    static getSheetData(filePath, sheetName) {

        const workbook = xlsx.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        return xlsx.utils.sheet_to_json(worksheet);

    }

    // Read particular row
    static getRowData(filePath, sheetName, rowNumber) {

        const data = this.getSheetData(filePath, sheetName);

        return data[rowNumber];

    }

    // Read particular column value
    static getCellData(filePath, sheetName, rowNumber, columnName) {

        const data = this.getSheetData(filePath, sheetName);

        return data[rowNumber][columnName];

    }

}