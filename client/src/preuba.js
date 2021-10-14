function filter (arra, elemento){
    let a = arra
    let b = elemento

    if (b === "all") {
        return a
    } else {
    a.filter(el => el.types.name === b)
  }
  }
  
  let array =[
    {
      "id": 1,
      "name": "bulbasaur",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      "attack": 49,
      "defense": 49,
      "types": [
        {
          "name": "grass"
        },
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 2,
      "name": "ivysaur",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      "attack": 62,
      "defense": 63,
      "types": [
        {
          "name": "grass"
        },
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 3,
      "name": "venusaur",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      "attack": 82,
      "defense": 83,
      "types": [
        {
          "name": "grass"
        },
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 4,
      "name": "charmander",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      "attack": 52,
      "defense": 43,
      "types": [
        {
          "name": "fire"
        }
      ]
    },
    {
      "id": 5,
      "name": "charmeleon",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      "attack": 64,
      "defense": 58,
      "types": [
        {
          "name": "fire"
        }
      ]
    },
    {
      "id": 6,
      "name": "charizard",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      "attack": 84,
      "defense": 78,
      "types": [
        {
          "name": "fire"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 7,
      "name": "squirtle",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      "attack": 48,
      "defense": 65,
      "types": [
        {
          "name": "water"
        }
      ]
    },
    {
      "id": 8,
      "name": "wartortle",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
      "attack": 63,
      "defense": 80,
      "types": [
        {
          "name": "water"
        }
      ]
    },
    {
      "id": 9,
      "name": "blastoise",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
      "attack": 83,
      "defense": 100,
      "types": [
        {
          "name": "water"
        }
      ]
    },
    {
      "id": 10,
      "name": "caterpie",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      "attack": 30,
      "defense": 35,
      "types": [
        {
          "name": "bug"
        }
      ]
    },
    {
      "id": 11,
      "name": "metapod",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
      "attack": 20,
      "defense": 55,
      "types": [
        {
          "name": "bug"
        }
      ]
    },
    {
      "id": 12,
      "name": "butterfree",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
      "attack": 45,
      "defense": 50,
      "types": [
        {
          "name": "bug"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 13,
      "name": "weedle",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
      "attack": 35,
      "defense": 30,
      "types": [
        {
          "name": "bug"
        },
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 14,
      "name": "kakuna",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
      "attack": 25,
      "defense": 50,
      "types": [
        {
          "name": "bug"
        },
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 15,
      "name": "beedrill",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
      "attack": 90,
      "defense": 40,
      "types": [
        {
          "name": "bug"
        },
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 16,
      "name": "pidgey",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
      "attack": 45,
      "defense": 40,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 17,
      "name": "pidgeotto",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
      "attack": 60,
      "defense": 55,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 18,
      "name": "pidgeot",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
      "attack": 80,
      "defense": 75,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 19,
      "name": "rattata",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
      "attack": 56,
      "defense": 35,
      "types": [
        {
          "name": "normal"
        }
      ]
    },
    {
      "id": 20,
      "name": "raticate",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
      "attack": 81,
      "defense": 60,
      "types": [
        {
          "name": "normal"
        }
      ]
    },
    {
      "id": 21,
      "name": "spearow",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
      "attack": 60,
      "defense": 30,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 22,
      "name": "fearow",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
      "attack": 90,
      "defense": 65,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "flying"
        }
      ]
    },
    {
      "id": 23,
      "name": "ekans",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
      "attack": 60,
      "defense": 44,
      "types": [
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 24,
      "name": "arbok",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
      "attack": 95,
      "defense": 69,
      "types": [
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 25,
      "name": "pikachu",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      "attack": 55,
      "defense": 40,
      "types": [
        {
          "name": "electric"
        }
      ]
    },
    {
      "id": 26,
      "name": "raichu",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
      "attack": 90,
      "defense": 55,
      "types": [
        {
          "name": "electric"
        }
      ]
    },
    {
      "id": 27,
      "name": "sandshrew",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
      "attack": 75,
      "defense": 85,
      "types": [
        {
          "name": "ground"
        }
      ]
    },
    {
      "id": 28,
      "name": "sandslash",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
      "attack": 100,
      "defense": 110,
      "types": [
        {
          "name": "ground"
        }
      ]
    },
    {
      "id": 29,
      "name": "nidoran-f",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
      "attack": 47,
      "defense": 52,
      "types": [
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 30,
      "name": "nidorina",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
      "attack": 62,
      "defense": 67,
      "types": [
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 31,
      "name": "nidoqueen",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
      "attack": 92,
      "defense": 87,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "ground"
        }
      ]
    },
    {
      "id": 32,
      "name": "nidoran-m",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
      "attack": 57,
      "defense": 40,
      "types": [
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 33,
      "name": "nidorino",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
      "attack": 72,
      "defense": 57,
      "types": [
        {
          "name": "poison"
        }
      ]
    },
    {
      "id": 34,
      "name": "nidoking",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
      "attack": 102,
      "defense": 77,
      "types": [
        {
          "name": "poison"
        },
        {
          "name": "ground"
        }
      ]
    },
    {
      "id": 35,
      "name": "clefairy",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
      "attack": 45,
      "defense": 48,
      "types": [
        {
          "name": "fairy"
        }
      ]
    },
    {
      "id": 36,
      "name": "clefable",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
      "attack": 70,
      "defense": 73,
      "types": [
        {
          "name": "fairy"
        }
      ]
    },
    {
      "id": 37,
      "name": "vulpix",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
      "attack": 41,
      "defense": 40,
      "types": [
        {
          "name": "fire"
        }
      ]
    },
    {
      "id": 38,
      "name": "ninetales",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
      "attack": 76,
      "defense": 75,
      "types": [
        {
          "name": "fire"
        }
      ]
    },
    {
      "id": 39,
      "name": "jigglypuff",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
      "attack": 45,
      "defense": 20,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "fairy"
        }
      ]
    },
    {
      "id": 40,
      "name": "wigglytuff",
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
      "attack": 70,
      "defense": 45,
      "types": [
        {
          "name": "normal"
        },
        {
          "name": "fairy"
        }
      ]
    },
    {
      "name": "carlos",
      "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F617908011354064682%2F&psig=AOvVaw3czfWMieZsjbvjB7Sah62S&ust=1634127793704000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjl4MvuxPMCFQAAAAAdAAAAABAD",
      "attack": 0,
      "defense": 0,
      "id": "bda5a916-4c66-4576-94c8-ceffa4514d9b",
      "types": [
        {
          "name": "ground",
          "pokemon_types": {
            "createdAt": "2021-10-13T16:44:43.862Z",
            "updatedAt": "2021-10-13T16:44:43.862Z",
            "pokemonId": "bda5a916-4c66-4576-94c8-ceffa4514d9b",
            "typeId": 5
          }
        }
      ]
    },
    {
      "name": "aan",
      "img": " ",
      "attack": 0,
      "defense": 0,
      "id": "0f26f1bb-8042-47ab-b84f-4cd5ac779dd8",
      "types": [
        {
          "name": "ice",
          "pokemon_types": {
            "createdAt": "2021-10-13T16:53:25.630Z",
            "updatedAt": "2021-10-13T16:53:25.630Z",
            "pokemonId": "0f26f1bb-8042-47ab-b84f-4cd5ac779dd8",
            "typeId": 15
          }
        }
      ]
    }
  ]
  
  filter (array, "all")
  