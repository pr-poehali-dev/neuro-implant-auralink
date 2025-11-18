import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Brain" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">АуРА линк</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("technology")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Технология
            </button>
            <button
              onClick={() => scrollToSection("patients")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Для пациентов
            </button>
            <button
              onClick={() => scrollToSection("research")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Исследования
            </button>
            <Button size="sm" className="ml-4">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="hero"
        className="pt-32 pb-20 px-6 container mx-auto animate-fade-in"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              Клинически доказано
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Будущее когнитивного
              <span className="text-primary"> восстановления</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              АуРА линк — нейроимплант нового поколения для улучшения и
              восстановления когнитивных способностей после травм и заболеваний.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="FileText" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Play" size={20} />
                Посмотреть видео
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">
                  Успешных имплантаций
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">2.5x</div>
                <div className="text-sm text-muted-foreground">
                  Улучшение памяти
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Пациентов</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center animate-scale-in">
              <div className="relative">
                <Icon name="Brain" size={200} className="text-primary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary rounded-full animate-pulse opacity-50"></div>
                  <div className="absolute w-24 h-24 bg-secondary rounded-full animate-pulse opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="technology"
        className="py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Icon name="Cpu" size={16} />
              Передовая технология
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Как работает АуРА линк
            </h2>
            <p className="text-lg text-muted-foreground">
              Инновационная технология нейромодуляции с прецизионной стимуляцией
              нейронных сетей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Нейронная стимуляция
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Прецизионная электростимуляция повреждённых нейронных путей с
                  адаптивной частотой до 10 000 импульсов в секунду
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Network" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Искусственная пластичность
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ИИ анализирует активность мозга в реальном времени и создаёт
                  новые синаптические связи
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Биосовместимость</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Имплант изготовлен из биоинертных материалов с нанопокрытием,
                  предотвращающим отторжение
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Динамика восстановления когнитивных функций
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { month: "1 месяц", value: 35, label: "Базовый уровень" },
                  { month: "3 месяца", value: 62, label: "Активация связей" },
                  { month: "6 месяцев", value: 85, label: "Стабилизация" },
                  { month: "12 месяцев", value: 95, label: "Полное восстановление" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-4">
                      <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
                        <div
                          className="absolute bottom-0 w-full bg-primary transition-all duration-1000"
                          style={{ height: `${item.value}%` }}
                        ></div>
                        <div className="absolute inset-0 flex items-end justify-center pb-4">
                          <span className="text-2xl font-bold text-white mix-blend-difference">
                            {item.value}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold mb-1">{item.month}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="patients" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Icon name="Heart" size={16} />
                Помощь пациентам
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Кому подходит АуРА линк
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Нейроимплант показал высокую эффективность при различных
                когнитивных нарушениях
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "Activity",
                    title: "Черепно-мозговые травмы",
                    desc: "Восстановление памяти и концентрации после ЧМТ",
                  },
                  {
                    icon: "Sparkles",
                    title: "Нейродегенеративные заболевания",
                    desc: "Замедление когнитивного угасания при БА и деменции",
                  },
                  {
                    icon: "Target",
                    title: "Инсульты и ишемия",
                    desc: "Восстановление нейронных путей после сосудистых событий",
                  },
                  {
                    icon: "TrendingUp",
                    title: "Когнитивное усиление",
                    desc: "Улучшение памяти и обработки информации у здоровых людей",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6 flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
                <CardContent className="p-8">
                  <Icon name="CheckCircle" size={48} className="mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">
                    Процесс имплантации
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Предоперационная МРТ и картирование мозга",
                      "Минимально инвазивная операция (2-3 часа)",
                      "Период адаптации 7-10 дней",
                      "Настройка параметров стимуляции",
                      "Регулярный мониторинг показателей",
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-white/90">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Icon name="Quote" size={32} className="text-primary flex-shrink-0" />
                    <p className="text-lg italic">
                      «После инсульта я не мог вспомнить имена близких. Спустя 6
                      месяцев с АуРА линк моя память полностью восстановилась»
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">Михаил К., 54 года</div>
                      <div className="text-sm text-muted-foreground">
                        Пациент клиники
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section
        id="research"
        className="py-20 px-6 bg-muted/30"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Icon name="Microscope" size={16} />
              Научная база
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Клинические исследования
            </h2>
            <p className="text-lg text-muted-foreground">
              АуРА линк прошёл полный цикл клинических испытаний и одобрен
              регуляторами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="FileCheck" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Фаза III завершена</h3>
                    <p className="text-sm text-muted-foreground">
                      2021-2024 • 523 пациента
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Эффективность восстановления
                      </span>
                      <span className="text-sm font-bold text-primary">87%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[87%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Безопасность процедуры
                      </span>
                      <span className="text-sm font-bold text-primary">98%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[98%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Удовлетворённость пациентов
                      </span>
                      <span className="text-sm font-bold text-primary">94%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[94%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
                    <Icon name="Award" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Сертификации</h3>
                    <p className="text-sm text-muted-foreground">
                      Международное признание
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "FDA", desc: "США, одобрение 2023" },
                    { name: "CE Mark", desc: "Европейский союз, 2023" },
                    { name: "Минздрав РФ", desc: "Россия, регистрация 2024" },
                    { name: "PMDA", desc: "Япония, сертификация 2024" },
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
                    >
                      <Icon name="BadgeCheck" size={20} className="text-secondary" />
                      <div>
                        <div className="font-semibold">{cert.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {cert.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Публикации и партнёры
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Результаты исследований опубликованы в ведущих научных
                    журналах
                  </p>
                  <div className="space-y-4">
                    {[
                      "Nature Neuroscience (Impact Factor: 28.7)",
                      "The Lancet Neurology (IF: 48.0)",
                      "Brain Stimulation (IF: 6.3)",
                    ].map((pub, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name="FileText" size={20} className="text-primary" />
                        <span className="font-medium">{pub}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "MIT", icon: "GraduationCap" },
                    { name: "Stanford", icon: "BookOpen" },
                    { name: "Mayo Clinic", icon: "Hospital" },
                    { name: "Charité", icon: "Building2" },
                  ].map((partner, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 hover:shadow-md transition-shadow"
                    >
                      <Icon name={partner.icon} size={40} className="text-primary mb-3" />
                      <div className="font-bold text-center">{partner.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать путь к восстановлению?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишитесь на консультацию к нашим специалистам для оценки
            возможности применения АуРА линк
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-primary hover:text-primary"
            >
              <Icon name="Calendar" size={20} />
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Icon name="Download" size={20} />
              Скачать брошюру
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} className="text-white" />
                </div>
                <span className="font-bold">АуРА линк</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Нейротехнологии будущего для восстановления когнитивных
                способностей
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Технология</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Как работает</div>
                <div>Клинические данные</div>
                <div>Безопасность</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Пациентам</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Показания</div>
                <div>Процесс имплантации</div>
                <div>Отзывы</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@auralink.ru
                </div>
              </div>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 АуРА линк. Все права защищены.</div>
            <div className="flex gap-6">
              <span>Политика конфиденциальности</span>
              <span>Условия использования</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
