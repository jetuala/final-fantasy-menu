import { createStore } from 'redux';

const initialState = {
    party: [{
        "id": "c111db78-8c94-4a89-5351-08d6afc3b4ff",
        "name": "Cecil",
        "japaneseName": "セシル・ハーヴィ",
        "age": "20",
        "gender": "Male",
        "race": "Half-Lunarian",
        "job": "Dark Knight/Paladin",
        "height": "1.78",
        "weight": "58",
        "origin": "Final Fantasy IV",
        "description": "Cecil Harvey (セシル・ハーヴィSeshiru Havi) is the main protagonist of Final Fantasy IV, who also appears in the sequel Final Fantasy IV: The After Years, and the interquel Final Fantasy IV -Interlude- that bridges the gap between the two games. Cecil is one of the few characters in the series to change his job during the game, starting out as a Dark Knight, but after a trial and the battle with the first of the Four Elemental Archfiends, transforms into a Paladin.",
        "pictures": [
          {
            "id": "2f359bab-46df-42d8-8e68-741d28d0f805",
            "url": "https://mooglestorage.blob.core.windows.net/images/2f359bab-46df-42d8-8e68-741d28d0f805.jpg",
            "primary": 1,
            "collectionId": "c111db78-8c94-4a89-5351-08d6afc3b4ff"
          }
        ],
        "stats": [
          {
            "id": "8877f1b2-0bb8-4d43-9ac7-500e73f6f2bb",
            "platform": "SNES",
            "level": 99,
            "class": "Paladin",
            "hitPoints": 9423,
            "manaPoints": 534,
            "attack": 85,
            "defense": 0,
            "magic": 0,
            "magicDefense": 0,
            "agility": 35,
            "spirit": 41,
            "collectionId": "c111db78-8c94-4a89-5351-08d6afc3b4ff"
          },
          {
            "id": "47543ef5-c92f-4837-b713-a78b24e4a22e",
            "platform": "SNES",
            "level": 1,
            "class": "Dark Knight",
            "hitPoints": 200,
            "manaPoints": 0,
            "attack": 13,
            "defense": 0,
            "magic": 0,
            "magicDefense": 0,
            "agility": 10,
            "spirit": 3,
            "collectionId": "c111db78-8c94-4a89-5351-08d6afc3b4ff"
          },
          {
            "id": "af3d459d-ce4c-462d-812f-eb57a4d88703",
            "platform": "SNES",
            "level": 1,
            "class": "Paladin",
            "hitPoints": 600,
            "manaPoints": 10,
            "attack": 10,
            "defense": 0,
            "magic": 0,
            "magicDefense": 0,
            "agility": 13,
            "spirit": 8,
            "collectionId": "c111db78-8c94-4a89-5351-08d6afc3b4ff"
          },
          {
            "id": "e8f0e8bb-fefd-43f3-a09b-f00972851c9a",
            "platform": "SNES",
            "level": 99,
            "class": "Dark Knight",
            "hitPoints": 5187,
            "manaPoints": 0,
            "attack": 61,
            "defense": 0,
            "magic": 0,
            "magicDefense": 0,
            "agility": 41,
            "spirit": 1,
            "collectionId": "c111db78-8c94-4a89-5351-08d6afc3b4ff"
          }
        ]
      }, 
      {
        "id": "93125b50-6667-40f8-0fa7-08d6afcab3e2",
        "name": "Rosa",
        "japaneseName": "ローザ・ファレル",
        "age": "19",
        "gender": "Female",
        "race": "Human",
        "job": "Whtie Mage",
        "height": "1.68",
        "weight": "47",
        "origin": "Final Fantasy IV",
        "description": "Rosa Joanna Farrell (ローザ・ファレル Rōza Fareru) is a playable character in Final Fantasy IV and its sequel, Final Fantasy IV: The After Years. She hails from Baron, and is a skilled Archer and White Mage. Rosa is Cecil's childhood friend, and harbors romantic feelings for him. Though Cecil is reluctant to let her follow him into danger at first, she stays by his side.",
        "pictures": [
          {
            "id": "797bf912-3a48-45a3-88ed-a2b938b24598",
            "url": "https://mooglestorage.blob.core.windows.net/images/797bf912-3a48-45a3-88ed-a2b938b24598.jpg",
            "primary": 1,
            "collectionId": "93125b50-6667-40f8-0fa7-08d6afcab3e2"
          }
        ],
        "stats": []
      }, 
      {
        "id": "74c36726-5b13-4e01-0fa3-08d6afcab3e2",
        "name": "Kain",
        "japaneseName": "カイン・ハイウィンド",
        "age": "21",
        "gender": "Male",
        "race": "Human",
        "job": "Dragoon",
        "height": "1.83",
        "weight": "61",
        "origin": "Final Fantasy IV",
        "description": "Kain Highwind (カイン・ハイウィンド Kain Haiwindo, ''Cain Highwind'' in the Japanese version) is a playable character in Final Fantasy IV and Final Fantasy IV: The After Years. He is a Dragoon from the kingdom of Baron, Cecil Harvey's childhood friend and adoptive older brother. He has feelings for Cecil's beloved Rosa Joanna Farrell, but he hides them so they do not hinder his relationship with either of the two: Rosa in turn has feelings for Cecil.",
        "pictures": [
          {
            "id": "336601e6-e6b1-4752-be6a-5ccdb7ff3532",
            "url": "https://mooglestorage.blob.core.windows.net/images/336601e6-e6b1-4752-be6a-5ccdb7ff3532.jpg",
            "primary": 1,
            "collectionId": "74c36726-5b13-4e01-0fa3-08d6afcab3e2"
          }
        ],
        "stats": []
      }],
    windowColor: "blue",
}

function partyReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PARTY_MEMBER':
            return state // "+ payload" "CONCAT" will change this eventually
        case 'DELETE_PARTY_MEMBER':
            return state // "- payload" "SLICE" or whatever. will change this eventually
        default:
            return state
    }
}

const store = createStore(partyReducer);

export default store;