import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal<number>(1);

  const changePokemonId = $((value: number) => {
    // Que el valor del signal no sea menor que cero.
    if (pokemonId.value + value > 0 && pokemonId.value + value < 999) {
      pokemonId.value += value;
    }
  }
  );

  return (
    <section>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="flex flex-col justify-center items-center gap-4 p-4">
        <h2 class="text-xl">Buscador Simple</h2>
        <span class="highlight text-2xl">
          {pokemonId.value}
        </span>
        <div>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`} alt="pokemon" width={200} height={200} />


        </div>
        <div class="flex justify-center gap-4">
          <button
            onClick$={() => changePokemonId(-1)}
            class="button-small">Anterior</button>
          <button
            onClick$={() => changePokemonId(1)}
            class="button-dark">Siguiente</button>
        </div>
      </div>


    </section>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
