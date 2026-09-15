"use client";

import { useState, useMemo } from "react";
import { SharedCanvas } from "@/components/projects/SharedCanvas";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { HorizontalGallery } from "@/components/projects/HorizontalGallery";
import { ProjectList } from "@/components/projects/ProjectList";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { projects as allProjects } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"gallery" | "list">("gallery");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <SharedCanvas />

      <div className="relative z-10">
        <ProjectsHero
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {viewMode === "gallery" ? (
          <HorizontalGallery
            projects={filteredProjects}
            onOpen={setSelectedProject}
          />
        ) : (
          <ProjectList
            projects={filteredProjects}
            onOpen={setSelectedProject}
          />
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}