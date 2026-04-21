/**
 * Google Apps Script — bound to your leaderboard spreadsheet.
 *
 * 1. Open your Sheet → Extensions → Apps Script
 * 2. Paste this file’s contents into Code.gs
 * 3. Deploy → New deployment → Web app
 *    Execute as: Me | Who has access: Anyone (or your org)
 * 4. Copy the Web app URL into google-sheets.config.js → appsScriptUrl
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName('Scores');
    if (!sh) {
      sh = ss.insertSheet('Scores');
      sh.appendRow(['Timestamp', 'Player', 'Score', 'Accuracy']);
    }
    var raw = (e.postData && e.postData.contents) || '{}';
    var data = {};
    try {
      data = JSON.parse(raw);
    } catch (err) {
      return jsonOut({ ok: false, error: 'invalid json' });
    }
    var name = String(data.name || '').slice(0, 80);
    var score = Number(data.score);
    var acc = Number(data.accuracy);
    if (score !== score) score = 0;
    if (acc !== acc) acc = 0;
    var at = data.at ? String(data.at) : new Date().toISOString();
    sh.appendRow([at, name, score, acc]);
    return jsonOut({ ok: true });
  } catch (err) {
    return jsonOut({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
