export interface Pokemon {
  name: string;
  image: string;
  id: number;
  height: number;
  weight: number;
  abilities: [
    {
      abilityName: string;
      infoLink: string;
    }
  ];
  moves: [
    {
      moveName: string;
      infoLink: string;
    }
  ];
  type: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
}
