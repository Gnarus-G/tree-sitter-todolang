package tree_sitter_todolang_test

import (
	"testing"

	tree_sitter "github.com/smacker/go-tree-sitter"
	"github.com/tree-sitter/tree-sitter-todolang"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_todolang.Language())
	if language == nil {
		t.Errorf("Error loading Todolang grammar")
	}
}
