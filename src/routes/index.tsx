import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from '~/components/pokemon/pokemon-image';

export default component$(() => {
  const pokemonId = useSignal<number>(1);
  const showBackImage = useSignal<boolean>(false);
  const isPokemonVisible = useSignal<boolean>(true);

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
        <h2 class="text-5xl">Buscador Simple</h2>
        <span class="font-bold text-5xl">
          {pokemonId.value}
        </span>
        <PokemonImage
          pokemonId={pokemonId.value}
          isBack={showBackImage.value}
          isVisible={isPokemonVisible.value}
        />
        <div class="flex justify-center gap-4">
          <button
            onClick$={() => changePokemonId(-1)}
            class="button-small">Anterior
          </button>
          <button
            onClick$={() => changePokemonId(1)}
            class="button-dark">Siguiente
          </button>
          <button
            onClick$={() => showBackImage.value = !showBackImage.value}
            class="button-small"
          >Back
          </button>
          <button
            onClick$={() => isPokemonVisible.value = !isPokemonVisible.value}
            class="button-dark">Revelar
          </button>
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
