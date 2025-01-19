import { GoogleSheetsClient } from '../connections/GoogleSheetsClient';
import { googleSheetsConfig } from '../config/googleSheets.config';

async function main() {
  const client = new GoogleSheetsClient();
  
  // Connect to specific spreadsheet
  const spreadsheet = await client.connectToSheet(googleSheetsConfig.spreadsheetId);
  
  // Get data from specific range
  const data = await client.getSheetData(googleSheetsConfig.spreadsheetId, 'Sheet1!A1:D10');
  
  return data;
}
