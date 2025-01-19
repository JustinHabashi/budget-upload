import process from "process";

export const googleSheetsConfig = {
  spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
  credentials: {
    // TODO add Google Sheets credentials
    type: process.env.GOOGLE_SHEETS_TYPE,
    project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  }
};
