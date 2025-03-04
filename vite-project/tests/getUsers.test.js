import { getUserById } from "../functions/getUsers.js";
import { expect, test, vi } from "vitest";
import { sql } from "../internal/sql";

// Mock de sql
vi.mock("../internal/sql", () => ({
    sql: vi.fn(),
}));

test("génère la bonne requête SQL", () => {
    const userId = 42;

    getUserById(userId);

    // Vérifie que sql a été appelé avec les bons arguments pour un template literal
    expect(sql).toHaveBeenCalledWith(["SELECT * FROM USER WHERE Id = ", ""],userId
    );
});