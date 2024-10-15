import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const location = useLocation();
    console.log(location.params.id);
    return (
        <div>
            <span class="text-5xl">Pokemon</span>
            {location.params.id}
        </div>
    )
});