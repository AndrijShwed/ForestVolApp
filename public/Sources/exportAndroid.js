async function saveExcelOnAndroid(workbook) {
    try {
        if (!window.Capacitor) {
            XLSX.writeFile(workbook, "forestvol_table.xlsx");
            return;
        }

        if (!window.Filesystem) {
            throw new Error("Filesystem не знайдено");
        }

        if (!window.Share) {
            throw new Error("Share не знайдено");
        }

        const base64 = XLSX.write(workbook, {
            type: "base64",
            bookType: "xlsx"
        });

        const fileName = `forestvol_${Date.now()}.xlsx`;

        const result = await window.Filesystem.writeFile({
            path: fileName,
            data: base64,
            directory: "DOCUMENTS"
        });

        await window.Share.share({
            title: "ForestVolume",
            text: "Експорт Excel",
            url: result.uri
        });

    } catch (e) {
        alert("Помилка експорту Excel:\n\n" + e.message);
        console.error(e);
    }
}