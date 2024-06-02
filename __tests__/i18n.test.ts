/*
 *
 * Test per la libreria i18n
 *
 *
 *
 * */

import { i18n } from "../src/utils";

const translationsIT = {
  welcomeMessage: "Benvenuto!",
  errorMessage: "Errore!",
  successMessage: "Operazione completata con successo.",
  nested: {
    welcomeMessage: "Benvenuto!",
  },
};

// Oggetto per le traduzioni in inglese
const translationsEN = {
  welcomeMessage: "Welcome!",
  errorMessage: "Error!",
  successMessage: "Operation completed successfully.",

  nested: {
    welcomeMessage: "Welcome!",
  },
};

i18n.init({
  translations: {
    it: translationsIT,
    en: translationsEN,
  },
});

describe("test t method", () => {
  i18n.locale = "en";
  it("get translation", () => {
    const t = i18n.t("welcomeMessage");

    expect(t).toEqual("Welcome!");
  });
  it("get nested translation", () => {
    const t = i18n.t("nested.welcomeMessage");
    expect(t).toEqual("Welcome!");
  });
});
