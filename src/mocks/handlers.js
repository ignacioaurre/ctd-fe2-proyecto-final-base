import { rest } from "msw";

export const handlers = [
  rest.get("https://thesimpsonsquoteapi.glitch.me/quotes", (req, res, ctx) => {
    const character = req.url.searchParams.get("character")
      if (character) {
        return res(
          ctx.json( [
              {
                    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
                    character: "Homer Simpson",
                    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
                    characterDirection: "Left"
              },
            ],
          )
        );
      } 
    return res(
      ctx.json( [
          {
                quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
                character: "Nelson Muntz",
                image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
                characterDirection: "Left"
          },
        ],
      )
    );
  }),
];