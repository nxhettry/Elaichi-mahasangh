import Image from "next/image";

export function CardamomHeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Main background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-700/90 z-10"></div>
      <Image
        src="/placeholder.svg?height=800&width=1600"
        alt="Lush cardamom plantation in the misty hills of Nepal with farmers working"
        fill
        className="object-cover"
        priority
      />

      {/* Floating cardamom elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float">
          <Image
            src="/placeholder.svg?height=64&width=64"
            alt="Large cardamom pod"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 opacity-15 animate-pulse">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Cardamom seeds scattered"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-32 left-20 w-20 h-20 opacity-10 animate-bounce">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Cardamom plant with leaves"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-20 right-10 w-14 h-14 opacity-20 animate-pulse delay-500">
          <Image
            src="/placeholder.svg?height=56&width=56"
            alt="Cardamom flower blooming"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/3 left-1/3 w-10 h-10 opacity-15 animate-bounce delay-1000">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Dried cardamom"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-2/3 right-1/3 w-8 h-8 opacity-25 animate-pulse delay-700">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Fresh cardamom"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
