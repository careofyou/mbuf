import MotionSection from "./MotionSection"
import NavLink from "./NavLink"

const MobileNavigation: React.FC = () => (
  <div className="absolute z-10 flex h-full w-full justify-center bg-blue-200">
    <div className="mt-24 flex flex-col space-y-4 text-center">
      <MotionSection>
        <NavLink href="/" isMobileNavigation className="">
          Главная
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.1}>
        <NavLink href="/about" isMobileNavigation className="">
          О компании
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.2}>
        <NavLink href="/contacts" isMobileNavigation className="">
          Контакты
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.3}>
        <NavLink href="/products" isMobileNavigation className="">
          Продукция
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.4}>
        <NavLink href="/publications" isMobileNavigation className="">
          Публикации
        </NavLink>
      </MotionSection>
      <MotionSection delay={0.5}>
        <NavLink href="/projects" isMobileNavigation className="">
          Проекты
        </NavLink>
      </MotionSection>
    </div>
  </div>
)

export default MobileNavigation
