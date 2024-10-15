import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface PokemonImageProps {
    pokemonId: number;
    isBack: boolean;
    isVisible?: boolean;
}

export const PokemonImage = component$(({ pokemonId = 1, isBack, isVisible }: PokemonImageProps) => {
    const imageLoader = useSignal(false);

    useTask$(({ track }) => {
        track(() => pokemonId);
        imageLoader.value = false
    })

    return (
        <div class="flex items-center justify-center h-[200px]">
            {!imageLoader.value && (
                <span>Loading ...</span>
            )}
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isBack ? 'back' : ''}/${pokemonId}.png`} alt="pokemon"
                width={200}
                height={200}
                onLoad$={() => imageLoader.value = true}
                class={[
                    {
                        'hidden': !imageLoader.value,
                        'brightness-0': isVisible
                    }, 'transition-all duration-500 ease-in-out']}
            />
        </div>
    )
});