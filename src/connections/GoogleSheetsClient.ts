import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export class GoogleSheetsClient {
  private sheets;

  constructor() {
    const auth = new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly']
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async connectToSheet(spreadsheetId: string) {
    try {
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId,
      });
      
      return response.data;
    } catch (error) {
      throw new Error(`Failed to connect to spreadsheet: ${error.message}`);
    }
  }

  async getSheetData(spreadsheetId: string, range: string) {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      
      return response.data.values;
    } catch (error) {
      throw new Error(`Failed to fetch sheet data: ${error.message}`);
    }
  }
}
