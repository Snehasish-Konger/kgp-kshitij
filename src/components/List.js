const events = [
    {
        id: 1,
        name: 'Event 1',
        href: '/description',
        prize: '$35',
        team: '4'
    },
    {
        id: 2,
        name: 'Event 2',
        href: '#',
        prize: '$35',
        team: '4'
    },
    {
        id: 3,
        name: 'Event 3',
        href: '#',
        prize: '$35',
        team: '4'
    },
    {
        id: 4,
        name: 'Event 4',
        href: '#',
        prize: '$35',
        team: '4'
    },
]

export default function List() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Event Lists</h2>

                <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {events.map((event) => (
                        <div key={event.id} className="group relative">
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={event.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {event.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">Required Member:{event.team}</p>
                                    <p className="mt-1 text-sm text-gray-500">Avaialable:{event.team}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">Prize Amount:{event.prize}</p>
                            </div>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">
                                <a href="/description"
                                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                >Expand</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
