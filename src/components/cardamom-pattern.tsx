import Image from "next/image";

interface CardamomPatternProps {
  className?: string;
  opacity?: number;
}

export function CardamomPattern({
  className = "",
  opacity = 0.1,
}: CardamomPatternProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {/* Scattered cardamom elements */}
      <div className="absolute top-10 left-10 w-8 h-8 animate-pulse">
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Cardamom pod"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-20 right-20 w-6 h-6 animate-bounce delay-300">
        <Image
          src="/placeholder.svg?height=24&width=24"
          alt="Cardamom seed"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 animate-pulse delay-700">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Cardamom plant"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-10 right-10 w-7 h-7 animate-bounce delay-1000">
        <Image
          src="/placeholder.svg?height=28&width=28"
          alt="Cardamom flower"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 w-12 h-12 animate-pulse delay-500 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/placeholder.svg?height=48&width=48"
          alt="Cardamom bundle"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
