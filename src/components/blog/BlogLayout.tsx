import { BlogToolbar } from "./BlogToolbar";
import { BlogGrid } from "./BlogGrid";
import { BlogSidebar } from "./BlogSidebar";
import { BlogPagination } from "./BlogPagination";

export function BlogLayout() {
  return (
    <section className="bg-cream pt-12 pb-20">
      <div className="container-custom">
        <BlogToolbar />
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Content */}
          <div className="w-full lg:w-[72%]">
            <BlogGrid />
            <BlogPagination />
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-[28%]">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
