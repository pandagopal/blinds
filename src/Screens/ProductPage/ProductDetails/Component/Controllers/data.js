import cord from "@/assets/images/details_page/cord.jpg";
import wand from "@/assets/images/details_page/wand.jpg";
import cordless from "@/assets/images/details_page/cordless.jpg";
import ringpull from "@/assets/images/details_page/ringpull.jpg";
import nocontrolpole from "@/assets/images/details_page/nocontrolpole.jpg";
import controlpole from "@/assets/images/details_page/controlpole.jpg";
import controlspole from "@/assets/images/details_page/controlspole.jpg";
import standard from "@/assets/images/details_page/standard.jpg";
import privacyslats from "@/assets/images/details_page/privacyslats.jpg";
import clothtapes from "@/assets/images/details_page/clothtapes.jpg";
import standardheadrail from "@/assets/images/details_page/standardheadrail.jpg";
import twostandard from "@/assets/images/details_page/twostandard.jpg";
import standardvalance from "@/assets/images/details_page/standardvalance.jpg";
import eloquencevalance from "@/assets/images/details_page/eloquencevalance.jpg";
import holddowns from "@/assets/images/details_page/holddowns.jpg";
import standardcar from "@/assets/images/details_page/standardcar.jpg";

export const constrols = [
  {
    id: 1,
    title: "Cord",
    description:
      "Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.",
    image: cord.src,
    price: null,
    offPrice: null,
    child_controls: [
      {
        tiltes: [
          {
            id: 1,
            title: "Choose your tilt",
            tilt_obj: [
              {
                id: 1,
                title: "Wand",
                description:
                  "A tilt wand is a standard choice for opening and closing your blinds' slats. It is a safer tilt choice for homes with children and pets.",
                price: null,
                offPrice: null,
                block_light_id: 2,
                image: wand.src,
              },
              {
                id: 2,
                title: "Cord",
                description:
                  "Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.",
                price: null,
                offPrice: null,
                block_light_id: 1,
                image: cord.src,
                child_controls: [],
              },
              {
                id: 3,
                title: "Ring",
                description:
                  "Ring Tilt will have a small ring attached to the tilter instead of a wand. A control pole can be used to tilt your blind.",
                price: null,
                offPrice: null,
                block_light_id: 1,
                image: ringpull.src,
                child_controls: [],
                extended_control_pool_id: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ring Pull",
    description:
      "Ring Pull is a corded product without long dangling cords.  There is a ring attached to the pull cord and can be used with a control pole.",
    image: ringpull.src,
    price: "10.36",
    offPrice: "14.80",
    child_controls: [
      {
        tiltes: [
          {
            id: 1,
            title: "Choose your tilt",
            tilt_obj: [
              {
                id: 1,
                title: "Wand",
                description:
                  "A tilt wand is a standard choice for opening and closing your blinds' slats. It is a safer tilt choice for homes with children and pets.",
                price: null,
                offPrice: null,
                block_light_id: 2,
                image: wand.src,
              },
              {
                id: 2,
                title: "Cord",
                description:
                  "Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.",
                price: null,
                offPrice: null,
                block_light_id: 1,
                image: cord.src,
                child_controls: [],
              },
              {
                id: 3,
                title: "Ring",
                description:
                  "Ring Tilt will have a small ring attached to the tilter instead of a wand. A control pole can be used to tilt your blind.",
                price: null,
                offPrice: null,
                block_light_id: 2,
                image: ringpull.src,
                child_controls: [],
              },
            ],
          },
        ],
      },
      {
        extended_contorl_pools: [
          {
            id: 1,
            title: "Do you need an extended control pole?",
            extended_pool_obj: [
              {
                id: 1,
                title: "No Control Pole Needed",
                description: "",
                price: null,
                offPrice: null,
                image: nocontrolpole.src,
              },
              {
                id: 2,
                title: "6' Control Pole",
                description: "",
                price: "15.29",
                offPrice: "25.48",
                image: controlpole.src,
              },
              {
                id: 3,
                title: "9' Control Pole",
                description: "",
                price: "25.18",
                offPrice: "41.97",
                image: controlpole.src,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Cordless",
    description:
      "Cordless blinds are the peak in style and function. They are the safer choice for homes with children and pets.",
    image: cordless.src,
    price: "40.80",
    offPrice: "58.28",
    child_controls: [
      {
        tiltes: [
          {
            id: 1,
            title: "Choose your tilt",
            tilt_obj: [
              {
                id: 1,
                title: "Wand",
                description:
                  "A tilt wand is a standard choice for opening and closing your blinds' slats. It is a safer tilt choice for homes with children and pets.",
                price: null,
                offPrice: null,
                block_light_id: 2,
                image: wand.src,
              },
              {
                id: 2,
                title: "Cord",
                description:
                  "Cords are a standard lift choice. Corded products have multiple free-hanging pull cords and are not recommended in homes with children and pets.",
                price: null,
                offPrice: null,
                block_light_id: 1,
                image: cord.src,
                child_controls: [],
              },
              {
                id: 3,
                title: "Ring",
                description:
                  "Ring Tilt will have a small ring attached to the tilter instead of a wand. A control pole can be used to tilt your blind.",
                price: null,
                offPrice: null,
                image: ringpull.src,
                child_controls: [],
                extended_control_pool_id: 1,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const extendedControlPole = [
  {
    id: 1,
    label: "",
    block_light_obj: [
      {
        id: 1,
        title: "No Control Pole Needed",
        description: ``,
        price: null,
        offPrice: null,
        image: nocontrolpole.src,
      },
      {
        id: 2,
        title: "6' Control Pole",
        description: ``,
        price: "15.29",
        offPrice: "25.48",
        image: controlpole.src,
      },
      {
        id: 3,
        title: "9' Control Pole",
        description: ``,
        price: "25.18",
        offPrice: "41.97",
        image: controlspole.src,
      },
    ],
  },
];

export const titlBlockLight = [
  {
    id: 1,
    label: "Block Light / Add Privacy",
    block_light_obj: [
      {
        id: 1,
        title: "Standard",
        description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
        price: null,
        offPrice: null,
        image: standard.src,
      },
      {
        id: 2,
        title: "Privacy Slats",
        description: `Privacy slats reduce the light that passes through a closed blind. A great choice for a classic look with enhanced light control. Not recommended when mounting on a door.`,
        price: "10.50",
        offPrice: null,
        image: privacyslats.src,
        child_controls: [],
      },
      {
        id: 3,
        title: "Cloth Tapes",
        description: `Cloth tape adds style and minimizes the light that can pass through a closed blind. Coordinate to your room design to achieve just the look you want.`,
        price: "10.50",
        offPrice: null,
        image: clothtapes.src,
        child_controls: [],
      },
    ],
  },
  {
    id: 2,
    label: "Block Light / Add Privacy",
    block_light_obj: [
      {
        id: 1,
        title: "Standard",
        description: `A standard slat will have small holes that allow light to pass through. Upgrade to a product with privacy slats if you are looking for more light control.`,
        price: null,
        offPrice: null,
        image: standard.src,
      },
      {
        id: 2,
        title: "Privacy Slats",
        description: `Privacy slats reduce the light that passes through a closed blind. A great choice for a classic look with enhanced light control. Not recommended when mounting on a door.`,
        price: "10.50",
        offPrice: null,
        image: privacyslats.src,
        child_controls: [],
      },
      {
        id: 3,
        title: "Cloth Tapes",
        description: `Cloth tape adds style and minimizes the light that can pass through a closed blind. Coordinate to your room design to achieve just the look you want.`,
        price: "10.50",
        offPrice: null,
        image: clothtapes.src,
        child_controls: [],
      },
    ],
  },
];

export const headrailStyle = {
  id: 1,
  label: "Choose your headrail style",
  styles: [
    {
      id: 1,
      title: "Standard",
      price: null,
      offPrice: null,
      description: "",
      image: standardheadrail.src,
      child_controls: [
        {
          id: 1,
          label: "Choose your controls",
          controls: [
            {
              id: 1,
              title: "Control Position",
              image: wand.src,
              price: null,
              offPrice: null,
              description: "",
              postion: [
                { id: 1, title: "Left Tilt / Cordless Lift" },
                { id: 2, title: "Tilt Right / Cordless Lift" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "2 on 1",
      price: "31.48",
      offPrice: "52.46",
      description: "",
      image: twostandard.src,
      child_controls: [
        {
          id: 1,
          label: "Choose your controls",
          controls: [
            {
              id: 1,
              title: "Left Blind",
              image: wand.src,
              price: null,
              offPrice: null,
              description: "",
              postion: [
                { id: 1, title: "Tilt-Right / Cordless Lift" },
                { id: 2, title: "Tilt-Left / Cordless Lift" },
              ],
            },
            {
              id: 2,
              title: "Right Blind",
              image: wand.src,
              price: null,
              offPrice: null,
              description: "",
              postion: [
                { id: 1, title: "Tilt-Right / Cordless Lift" },
                { id: 2, title: "Tilt-Left / Cordless Lift" },
              ],
            },
            {
              id: 1,
              title: "Left Blind Width",
              price: null,
              offPrice: null,
              description: "",
              minWidth: 20,
              maxWidth: 120,
            },
            {
              id: 1,
              title: "Right Blind Width",
              price: null,
              offPrice: null,
              description: "",
              minWidth: 20,
              maxWidth: 120,
            },
          ],
        },
      ],
    },
  ],
};

export const valanceControls = [
  {
    label: "Choose your valance",
    valanceCard: [
      {
        id: 1,
        title: `3" Standard Valance`,
        price: null,
        offPrice: null,
        image: standardvalance.src,
      },
      {
        id: 2,
        title: `3 1/4" Eloquence Valance`,
        price: null,
        offPrice: null,
        image: eloquencevalance.src,
      },
    ],
  },
];

export const extrasControls = [
  {
    label: "Extras",
    extrasCard: [
      {
        id: 1,
        title: `Hold Downs`,
        description:
          "Hold down brackets are a must if installing onto a door. They hold the bottom of the blind against the door.",
        price: null,
        offPrice: null,
        image: holddowns.src,
      },
    ],
  },
];

export const shippingMethods = [
  {
    label: "Choose Your Shipping Method",
    shippingCard: [
      {
        id: 1,
        title: `Standard`,
        description: "",
        price: null,
        offPrice: null,
        image: standardcar.src,
      },
    ],
  },
];
