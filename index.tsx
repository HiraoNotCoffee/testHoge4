import { useState } from 'react'
import { Menu, X, GitHub, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
					<a href="#" className="text-2xl font-bold">山田太郎</a>
					<button onClick={toggleMenu} className="md:hidden">
						{isMenuOpen ? <X /> : <Menu />}
					</button>
					<ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:static left-0 right-0 top-full bg-background md:bg-transparent flex-col md:flex-row gap-4 p-4 md:p-0`}>
						<li><a href="#about" className="hover:text-primary">自己紹介</a></li>
						<li><a href="#skills" className="hover:text-primary">スキル</a></li>
						<li><a href="#projects" className="hover:text-primary">プロジェクト</a></li>
						<li><a href="#contact" className="hover:text-primary">お問い合わせ</a></li>
					</ul>
				</nav>
			</header>

			<main>
				<section id="about" className="py-20 bg-muted">
					<div className="container mx-auto px-4">
						<h1 className="text-4xl md:text-6xl font-bold mb-4">こんにちは、山田太郎です</h1>
						<p className="text-xl mb-8">クリエイティブなWebエンジニアとして、革新的なウェブソリューションを提供しています。</p>
						<Button asChild>
							<a href="#contact">お問い合わせ</a>
						</Button>
					</div>
				</section>

				<section id="skills" className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-8">スキル</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'GraphQL', 'TailwindCSS', 'Git'].map((skill) => (
								<div key={skill} className="bg-muted p-4 rounded-lg text-center">{skill}</div>
							))}
						</div>
					</div>
				</section>

				<section id="projects" className="py-20 bg-muted">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-8">プロジェクト</h2>
						<div className="grid md:grid-cols-2 gap-8">
							{[
								{ title: 'Eコマースサイト', description: 'Next.jsとStripeを使用したフルスタックEコマースプラットフォーム' },
								{ title: 'タスク管理アプリ', description: 'ReactとFirebaseを使用したリアルタイムタスク管理アプリケーション' },
							].map((project, index) => (
								<div key={index} className="bg-background p-6 rounded-lg shadow-lg">
									<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
									<p>{project.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section id="contact" className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
						<form className="max-w-md mx-auto">
							<div className="mb-4">
								<label htmlFor="name" className="block mb-2">お名前</label>
								<Input type="text" id="name" required />
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block mb-2">メールアドレス</label>
								<Input type="email" id="email" required />
							</div>
							<div className="mb-4">
								<label htmlFor="message" className="block mb-2">メッセージ</label>
								<Textarea id="message" required />
							</div>
							<Button type="submit">送信</Button>
						</form>
					</div>
				</section>
			</main>

			<footer className="bg-muted py-8">
				<div className="container mx-auto px-4 flex justify-between items-center">
					<p>&copy; 2024 山田太郎. All rights reserved.</p>
					<div className="flex gap-4">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							<GitHub className="w-6 h-6" />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<Linkedin className="w-6 h-6" />
						</a>
						<a href="mailto:info@example.com" aria-label="Email">
							<Mail className="w-6 h-6" />
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}