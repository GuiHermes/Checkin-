import CardEventos from'../components/CardEventos';

export default function Eventos() {
    return (
        <section className='text-center'>
            <h1 className='mb-6 text-2xl font-semibold'>Eventos</h1>
            <div>
                <CardEventos/>
            </div>
        </section>
    );
}