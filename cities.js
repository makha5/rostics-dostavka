// Список городов и филиалов.
// Чтобы ВЫКЛЮЧИТЬ город — поставьте enabled: false, он пропадёт со страницы.
// Чтобы ДОБАВИТЬ город — скопируйте один блок { ... } и впишите новые данные.
// Если у города один филиал — можно указать один объект в branches,
// кнопка будет вести прямо по ссылке без раскрывающегося списка.

const CITIES = [
  {
    name: "Махачкала",
    enabled: true,
    branches: [
      { name: "Гамидова",      url: "https://makhachkala.edostav.ru/restorany/rostics-gamidova" },
      { name: "Казбекова",     url: "https://makhachkala.edostav.ru/restorany/rostics-kazbekova" },
      { name: "Акушинского",   url: "https://makhachkala.edostav.ru/restorany/rostics-akushinskogo" },
      { name: "Ленина",        url: "https://makhachkala.edostav.ru/restorany/rostics-lenina" },
      { name: "Толстого",      url: "https://makhachkala.edostav.ru/restorany/rostics-tolstogo" },
      { name: "Редукторный",   url: "https://makhachkala.edostav.ru/restorany/rostics-reduktornyj" }
    ]
  },
  {
    name: "Каспийск",
    enabled: true,
    branches: [
      { name: "Каспийск", url: "https://kaspiysk.edostav.ru/restorany/rostics-kaspiysk" }
    ]
  },
  {
    name: "Дербент",
    enabled: true,
    branches: [
      { name: "Дербент", url: "https://derbent.edostav.ru/restorany/rosticsderbent" }
    ]
  },
  {
    name: "Нальчик",
    enabled: true,
    branches: [
      { name: "Нальчик", url: "https://nalchik.edostav.ru/restorany/rostics-nalchik" }
    ]
  },
  {
    name: "Владикавказ",
    enabled: true,
    branches: [
      { name: "Владикавказ", url: "https://vladikavkaz.edostav.ru/restorany/rostics-vladikavkaz" }
    ]
  },
  {
    name: "Хасавюрт",
    enabled: true,
    branches: [
      { name: "Хасавюрт", url: "https://khasavyurt.edostav.ru/restorany/rostics-hasavyurt" }
    ]
  }
];
