import { Hono } from "hono"
import { vitaMonitoring } from "../repositories/vitaMonitoring.js"

const synaxarRoutes = new Hono()

synaxarRoutes.get("/", async (c) => {
    try {
        const saints = await vitaMonitoring.getSaintsWithBioStatus()

        return c.html(`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vies liturgiques</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background: #282828;
            color: #ebdbb2;
            padding: 20px;
            margin: 0;
        }
        
        table {
            border-collapse: collapse;
            font-size: 14px;
        }
        
        th, td {
            padding: 8px 16px;
            text-align: left;
            border-bottom: 1px solid #3c3836;
        }
        
        th {
            color: #fabd2f;
            font-weight: bold;
            border-bottom: 2px solid #3c3836;
        }
        
        .green {
            background: #6fa76f;
        }
        
        .red {
            background: #a85555;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Saints</th>
                <th>Vie liturgique</th>
            </tr>
        </thead>
        <tbody>
            ${saints
                .map(
                    (s: any) => `
                <tr>
                    <td>${s.saint}</td>
                    <td class="${s.has_biography ? "green" : "red"}"></td>
                </tr>
            `,
                )
                .join("")}
        </tbody>
    </table>
</body>
</html>
        `)
    } catch (error) {
        const msg = error instanceof Error ? error.message : "Erreur inconnue"
        return c.json({ error: msg }, 500)
    }
})

export default synaxarRoutes
