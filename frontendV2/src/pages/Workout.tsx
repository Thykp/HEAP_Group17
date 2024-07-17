import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Progress } from "../components/ui/progress"

export default function Workout() {
  return (
    <div className="flex flex-col h-full w-full bg-background">
      <header className="flex items-center h-16 px-4 md:px-6 border-b bg-card">
        <h1 className="text-2xl font-bold">Weekly Workout Plan</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <CardTitle>{day}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Bench Press</div>
                    <div className="text-sm text-muted-foreground">3 sets x 10 reps</div>
                  </div>
                  <Progress value={75} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Squats</div>
                    <div className="text-sm text-muted-foreground">4 sets x 12 reps</div>
                  </div>
                  <Progress value={60} />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">Deadlifts</div>
                    <div className="text-sm text-muted-foreground">3 sets x 8 reps</div>
                  </div>
                  <Progress value={90} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}