import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { CV_DATA } from "~/lib/cv-data";

export default function Experience() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-mono text-2xl font-bold text-foreground mb-8">
          Experience
        </h2>
        <div className="space-y-4">
          {CV_DATA.experience.map((exp, index) => (
            <motion.div
              key={`${exp.org}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="font-mono">
                <CardHeader>
                  <CardTitle className="text-base font-bold">
                    {exp.role} — {exp.org}
                  </CardTitle>
                  <p className="font-mono text-sm text-muted-foreground">
                    {exp.location ? `${exp.location} | ` : ""}{exp.dates}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-mono text-sm text-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i}>• {desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <h2 className="font-mono text-2xl font-bold text-foreground mb-8">
          Education
        </h2>
        <div className="space-y-4">
          {CV_DATA.education.map((edu, index) => (
            <motion.div
              key={`${edu.school}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="font-mono">
                <CardHeader>
                  <CardTitle className="text-base font-bold">
                    {edu.degree} — {edu.school}
                  </CardTitle>
                  <p className="font-mono text-sm text-muted-foreground">
                    {edu.location} | {edu.dates}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-sm text-foreground">{edu.awards}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}