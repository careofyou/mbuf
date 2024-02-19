import NavLink from "./NavLink"

import MotionSection from "./MotionSection"

const MobileNavigation: React.FC = () => (
  <div className="absolute z-10 flex h-full w-full justify-center bg-blue-200">
    <div className="mt-24 flex flex-col space-y-4 text-center">
      <MotionSection>
        <NavLink href="/" isMobileNavigation>
          Главная
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.1}>
        <NavLink href="/about" isMobileNavigation>
          О компании
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.2}>
        <NavLink href="/contacts" isMobileNavigation>
          Контакты
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.3}>
        <NavLink href="/products" isMobileNavigation>
          Продукция
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.4}>
        <NavLink href="/publications" isMobileNavigation>
          Публикации
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.5}>
        <NavLink href="/projects" isMobileNavigation>
          Проекты
        </NavLink>
      </MotionSection>
    </div>
  </div>
)

export default MobileNavigation
