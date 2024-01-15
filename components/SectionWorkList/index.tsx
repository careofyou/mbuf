import Image from "next/image"

const workHistory = [
  {
    title: "Отдел продаж",
    role: "Россия, 630090, г. Новосибирск, ул. Инженерная, 16 (схема проезда)",
    date: "(383) 363-77-01",
    url: "/",
  },
  {
    title: "Коммерческий директор",
    role: "Баукова Анастасия Геннадьевна",
    date: "+7 913 955 5597",
    url: "/",
  },
  {
    title: "Заведующий складом ",
    role: "Рязанцева Елена Юрьевна",
    date: "lena.ryazantseva@mbu.ru",
    url: "/",
  },
  {
    title: "Заместитель директора по производству",
    role: "Ломовская Татьяна Давыдовна",
    date: "lomovskaya@mbu.ru",
    url: "/",
  },
  {
    title: "Отдел биологического и технологического контроля (ОБТК)",
    role: "Отдел биологического и технологического контроля (ОБТК)",
    date: "obtk@mbu.ru",
    url: "https://www.paddlehr.com/",
  },
  {
    title: "Офис",
    role: "Почтовый адрес: Россия, 630090, г. Новосибирск, ул. Инженерная, 16 (схема проезда) ",
    date: "info@mbu.ru",
    url: "https://www.ibm.com/products/openpages-with-watson",
  },
]

export default function SectionWorkList() {
  return (
    <div className="mt-5 mb-10 border-2 border-dotted rounded-lg border-primary">
      {workHistory.map((work) => (
        <a
          href={work.url}
          target="_blank"
          className="block border-b-2 border-dotted first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-0 border-primary transition duration-500 ease-in-out hover:bg-gray-100"
          key={work.title}
          rel="noreferrer noopener"
        >
          <div
            key={work.title}
            className="flex flex-col items-start justify-between p-3 md:items-center md:space-x-2 md:flex-row"
          >
            <div className="flex items-center justify-between w-full md:w-fit space-x-4">
              <span className="text-sm text-secondary">{work.role}</span>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm text-tertiary">
                  {work.date}
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

type EmployerItem = {
  title: string
  src: StaticImageData
}

export function EmployerItem({ title, src }: EmployerItem) {
  return (
    <div className="flex items-center flex-column md:flex-row md:space-x-3">
      <div className="hidden w-8 h-8 p-1 bg-white border rounded-full border-primary md:block">
        <Image src={src} alt={`${title} logo`} width={24} height={24} />
      </div>
      <h3 className="font-semibold text-md">{title}</h3>
    </div>
  )
}
