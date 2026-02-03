"use client";

import { useState } from "react";
import { User, Send, Clock, ThumbsUp } from "lucide-react";
import { Comment } from "@/lib/data";

interface CommentSectionProps {
    initialComments: Comment[];
}

export function CommentSection({ initialComments }: CommentSectionProps) {
    const [comments, setComments] = useState<Comment[]>(initialComments);
    const [newComment, setNewComment] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !name.trim()) return;

        const comment: Comment = {
            id: comments.length + 1,
            user: name,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
            avatar: name.substring(0, 2).toUpperCase(),
            content: newComment,
        };

        setComments([comment, ...comments]);
        setNewComment("");
        setName("");
    };

    return (
        <div className="mt-20 border-t border-white/10 pt-16">
            <h3 className="text-3xl font-bold text-white mb-8">Comments ({comments.length})</h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmit} className="mb-12 bg-white/5 p-8 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-6">Leave a Reply</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email (optional)"
                        className="bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none"
                    />
                </div>
                <textarea
                    placeholder="Join the discussion..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-white focus:border-accent outline-none mb-6 min-h-[120px]"
                    required
                />
                <button
                    type="submit"
                    className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-all flex items-center gap-2"
                >
                    Post Comment <Send size={18} />
                </button>
            </form>

            {/* Comments List */}
            <div className="space-y-8">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="flex gap-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
                                {comment.avatar}
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-white text-lg">{comment.user}</span>
                                    <span className="text-xs text-gray-500 flex items-center gap-1">
                                        <Clock size={12} /> {comment.date}
                                    </span>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-3">{comment.content}</p>
                                <button className="text-xs text-gray-500 hover:text-accent flex items-center gap-1 transition-colors">
                                    <ThumbsUp size={12} /> Helpful
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
                )}
            </div>
        </div>
    );
}
